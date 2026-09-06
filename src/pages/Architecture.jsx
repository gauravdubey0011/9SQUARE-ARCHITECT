import ArchitecturalSlideshow from '../components/architecture/ArchitecturalSlideshow';
import ArchitectureIntro from '../components/architecture/ArchitectureIntro';
import ArchitectureConnect from '../components/architecture/ArchitectureConnect';
import ArchitectureProjectCategories from '../components/architecture/ArchitectureProjectCategories';
import ArchitectureExperienceCentre from '../components/architecture/ArchitectureExperienceCentre';
import ArchitectureFooter from '../components/architecture/ArchitectureFooter';

export default function Architecture() {
  return (
    <main className="architecture-page">

      <ArchitecturalSlideshow />
      <ArchitectureIntro />
      <ArchitectureConnect />
      <ArchitectureProjectCategories />
      <ArchitectureExperienceCentre />
      <ArchitectureFooter />
    </main>
  );
}