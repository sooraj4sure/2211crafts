/** Small pill marking demo-only content, per studio convention. */
export default function SampleBadge({ text = "Sample" }: { text?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-blush-500/60 bg-blush-100/70 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest text-blush-700">
      {text}
    </span>
  );
}
