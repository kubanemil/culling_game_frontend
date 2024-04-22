import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/kubanemil',
  },
  docsRepositoryBase: 'https://github.com/kubanemil/culling_game_frontend/blob/main/README.md',
  footer: {
    text: 'Culling Game Docs',
  },
}

export default config
