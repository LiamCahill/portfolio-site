import CMS from 'netlify-cms-app'
import FooterPreview from './preview-templates/FooterPreview'

import { IndexPagePreview } from './preview-templates/IndexPagePreview'
import NavbarPreview from './preview-templates/NavbarPreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('navbar', NavbarPreview)
CMS.registerPreviewTemplate('footer', FooterPreview)