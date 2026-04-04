#!/bin/zsh

set -euo pipefail

commit_group() {
  local step_label="$1"
  local commit_message="$2"
  shift 2

  echo
  echo "${step_label}"
  git add -- "$@"

  if git diff --cached --quiet; then
    echo "No staged changes for: ${commit_message}"
    return
  fi

  echo "Commit message: ${commit_message}"
  git commit -m "${commit_message}"
}

echo "Analyzing current repository state..."
git status --short --untracked-files=all
git diff --stat || true

commit_group \
  "[1/7] Adding project configuration and documentation files" \
  "chore: add Next.js workspace configuration and project docs" \
  .gitignore \
  .npmrc \
  AGENTS.md \
  CLAUDE.md \
  README.md \
  eslint.config.mjs \
  next.config.ts \
  package.json \
  pnpm-lock.yaml \
  pnpm-workspace.yaml \
  postcss.config.mjs \
  tailwind.config.ts \
  tsconfig.json

commit_group \
  "[2/7] Adding public static assets" \
  "chore: add public static asset set" \
  public/file.svg \
  public/globe.svg \
  public/next.svg \
  public/vercel.svg \
  public/window.svg

commit_group \
  "[3/7] Adding app router pages and global styles" \
  "feat: add app router pages for home catalogue and machine detail views" \
  src/app/catalogue/page.tsx \
  src/app/favicon.ico \
  src/app/globals.css \
  src/app/layout.tsx \
  'src/app/machines/[slug]/page.tsx' \
  src/app/page.tsx

commit_group \
  "[4/7] Adding shared layout, home, and UI components" \
  "feat: add shared layout primitives and homepage sections" \
  src/components/home/BrandsBar.tsx \
  src/components/home/CTASection.tsx \
  src/components/home/Hero.tsx \
  src/components/home/StatsBar.tsx \
  src/components/home/WhySection.tsx \
  src/components/layout/Footer.tsx \
  src/components/layout/MarqueeStrip.tsx \
  src/components/layout/Navbar.tsx \
  src/components/ui/Badge.tsx \
  src/components/ui/Button.tsx \
  src/components/ui/SectionLabel.tsx

commit_group \
  "[5/7] Adding catalogue components and interactive machine cards" \
  "feat: add catalogue components with tabbed machine experiences" \
  src/components/catalogue/ComponentPins.tsx \
  src/components/catalogue/FilterBar.tsx \
  src/components/catalogue/MachineCard.tsx \
  src/components/catalogue/MachineCatalogueSection.tsx \
  src/components/catalogue/PhotoGrid.tsx \
  src/components/catalogue/SalesQA.tsx \
  src/components/catalogue/SpecTable.tsx \
  src/components/catalogue/SpeedTable.tsx \
  src/components/catalogue/TabPanel.tsx \
  src/components/catalogue/UseCaseBar.tsx

commit_group \
  "[6/7] Adding machine data models and image utilities" \
  "feat: add machine data sources and image normalization utilities" \
  src/data/machine-details.json \
  src/data/machine-images.json \
  src/data/machines.json \
  src/lib/types.ts \
  src/lib/utils.ts

commit_group \
  "[7/7] Adding repository commit helper script" \
  "chore: add repository commit helper script" \
  commit.sh

echo
echo "All commits completed."
git status --short
