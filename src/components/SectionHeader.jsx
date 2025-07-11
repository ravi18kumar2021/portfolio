export default function SectionHeader({ sectionName }) {
  return (
    <h2 className="md:text-3xl text-2xl md:container mx-auto font-semibold text-center mb-6 pb-4 border-b text-violet-500">{sectionName}</h2>
  );
}