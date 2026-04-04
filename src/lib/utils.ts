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
  'dlican-dli-2513': ['dlican-dli-2513'],
  'dlican-dl3200-rp': ['dlican-dli-3220', 'dlican-dli-3220-alt'],
  'accurate-laser-e150': ['accurate-laser-e150'],
  'accurate-laser-e300': ['accurate-laser-e300'],
  'jhf-m5300': ['jhf-m5300'],
  'jhf-v398': ['jhf-vista-v398'],
  'jhf-v698': ['jhf-vista-v698'],
}

function normalizeImageUrl(url: string) {
  if (!url.includes('drive.google.com')) {
    return url
  }

  const matchedId = url.match(/[?&]id=([^&]+)/)?.[1]
  if (!matchedId) {
    return url
  }

  return `https://drive.google.com/thumbnail?id=${matchedId}&sz=w2000`
}

function getMachineImage(machineId: string) {
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
