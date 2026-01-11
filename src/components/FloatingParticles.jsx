export default function FloatingParticles() {
  return (
    <div className="floating-particles">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="particle"></div>
      ))}
    </div>
  );
}
