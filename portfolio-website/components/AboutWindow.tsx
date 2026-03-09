
export default function AboutWindow() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src="https://placehold.co/100x100"
          alt="Profile"
          className="w-24 h-24 rounded border border-secondary"
        />
        <div>
          <h2 className="text-accent text-lg font-bold">Isaac Netti</h2>
          <p className="text-text">UX/UI Web developer and IT Professional</p>
        </div>
      </div>
      <p className="text-text leading-relaxed">Using modern technologies to create engaging and user-friendly web experiences. Utilizing my IT background I aim to make the internet safer and more fun for work and play!</p>
    </div>
  );
}