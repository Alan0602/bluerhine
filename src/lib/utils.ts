import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import machineData from '@/data/machines.json'
import machineDetails from '@/data/machine-details.json'
import machineImages from '@/data/machine-images.json'
import type { Machine, MachineData, MachineDetailMap, MachineImageMap, MachineIndexData } from './types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const machineIndex = machineData as MachineIndexData
const machineDetailMap = machineDetails as MachineDetailMap
const machineImageMap = machineImages as MachineImageMap

const machineImageAliases: Record<string, string[]> = {
  // Key = machine ID from machines.json
  // Value = key(s) to try in machine-images.json (in order of preference)
  'dlican-dli-2513':     ['dlican-dli-2513'],
  'dlican-dl3200-rp':    ['dlican-dli-3220', 'dlican-dli-3220-alt'],
  'accurate-laser-e150': ['accurate-laser-e150'],
  'accurate-laser-e300': ['accurate-laser-e300'],
  'jhf-m5300':           ['jhf-m5300'],
  'jhf-v398':            ['jhf-vista-v398'],
  'jhf-v698':            ['jhf-vista-v698'],
  // NOTE: the machines below have no entry in machine-images.json yet.
  // They fall back cleanly to their headerGradient in the UI.
  // Once you add image URLs for them in machine-images.json, remove
  // the comment and add the key mapping here.
  // 'jhf-r9000pro':     [],
  // 'jhf-venus-10r':    [],
  // 'jhf-venus-33x':    [],
  // 'jhf-venus-33x-s':  [],
  // 'jhf-t3700':        [],
}

function normalizeImageUrl(url: string): string {
  if (!url.includes('drive.google.com')) {
    return url
  }

  // Extract file ID from any Google Drive URL format:
  //   /uc?export=view&id=FILE_ID          (original format)
  //   /thumbnail?id=FILE_ID&sz=w2000      (converted format)
  //   /file/d/FILE_ID/view                (share link format)
  const idFromQuery = url.match(/[?&]id=([^&]+)/)?.[1]
  const idFromPath  = url.match(/\/d\/([^/?&]+)/)?.[1]
  const fileId      = idFromQuery ?? idFromPath

  if (!fileId) {
    // Cannot extract ID — return unchanged, let Next.js attempt it
    return url
  }

  // DIRECT CDN LINK — skips the /thumbnail redirect chain entirely.
  // lh3.googleusercontent.com/d/{fileId}=s2000 is Google's stable direct
  // image CDN format. It serves the image immediately with no redirects,
  // as long as the Google Drive file is shared as "Anyone with the link".
  return `https://lh3.googleusercontent.com/d/${fileId}=s2000`
}

function getMachineImage(machineId: string): string | undefined {
  const aliases = [machineId, ...(machineImageAliases[machineId] ?? [])]

  for (const alias of aliases) {
    const image = machineImageMap[alias]?.image
    if (image) return normalizeImageUrl(image)
  }

  return undefined
}

const machines: Machine[] = machineIndex.machines.map((machine) => ({
  ...machine,
  image: getMachineImage(machine.id),
  ...machineDetailMap[machine.id],
}))

export const data: MachineData = {
  ...machineIndex,
  machines,
}

export function getMachineBySlug(slug: string): Machine | undefined {
  return data.machines.find((m) => m.slug === slug)
}

export function getMachinesByCategory(categoryId: string): Machine[] {
  if (categoryId === 'all') return data.machines
  return data.machines.filter((m) => m.category === categoryId)
}

export function getAllSlugs(): string[] {
  return data.machines.map((m) => m.slug)
}
