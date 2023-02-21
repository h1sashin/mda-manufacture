import HeroSection from './HeroSection'
import Navigation from './Navigation'
import RichTextSection from './RichTextSection'
import StepperSection from './StepperSection'
import TilesSection from './TilesSection'

type TypenameToComponent = Record<string, React.ComponentType<any>>

export const typenameToComponent: TypenameToComponent = {
    HeroSectionRecord: HeroSection,
    NavigationRecord: Navigation,
    RichTextSectionRecord: RichTextSection,
    TilesSectionRecord: TilesSection,
    StepperSectionRecord: StepperSection
}
