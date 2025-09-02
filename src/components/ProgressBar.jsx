export default function ProgressBar({ value = 0 }) {
  return (
    <div className="progress">
      <div className="progress__bar" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      <span className="progress__label">{Math.round(value)}%</span>
    </div>
  )
}