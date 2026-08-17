import { BeforeAfter, ImageFigure, ImageGallery, InsightCards, MetricComparison, MotionGallery, NarrativeSection, ProcessSteps, QuoteOrFeedback, Reflection, SUSComparison, Transformation } from "@/components/case-study/blocks";
import type { CaseStudySection } from "@/data/projects";

export function CaseStudyRenderer({ sections }: { sections: readonly CaseStudySection[] }) {
  return <div className="space-y-20 sm:space-y-28">{sections.map((section) => {
    let content;
    switch (section.type) {
      case "narrative": content = section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>); break;
      case "insights": content = <InsightCards items={section.items} />; break;
      case "figure": content = <ImageFigure asset={section.asset} caption={section.caption} />; break;
      case "gallery": content = <ImageGallery assets={section.assets} />; break;
      case "motion-gallery": content = <MotionGallery assets={section.assets} />; break;
      case "before-after": content = <BeforeAfter before={section.before} after={section.after} description={section.description} />; break;
      case "process": content = <ProcessSteps steps={section.steps} />; break;
      case "metrics": content = <MetricComparison comparisons={section.comparisons} note={section.note} />; break;
      case "sus-comparison": content = <SUSComparison comparisons={section.comparisons} note={section.note} />; break;
      case "feedback": content = <QuoteOrFeedback quote={section.quote} attribution={section.attribution} summary={section.summary} />; break;
      case "transformation": content = <Transformation from={section.from} to={section.to} note={section.note} />; break;
      case "reflection": content = <Reflection learned={section.learned} next={section.next} />; break;
    }
    return <NarrativeSection eyebrow={section.eyebrow} title={section.title} key={section.id}>{content}</NarrativeSection>;
  })}</div>;
}
