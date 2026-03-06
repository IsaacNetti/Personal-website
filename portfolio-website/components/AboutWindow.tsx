import { bio } from '../data/placeholderData';

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
          <h2 className="text-accent text-lg font-bold">John Doe</h2>
          <p className="text-text">Software Developer</p>
        </div>
      </div>
      <p className="text-text leading-relaxed">{bio}</p>
    </div>
  );
}