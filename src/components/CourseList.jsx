import ProgressBar from './ProgressBar'
import { courses } from '../utils/coursesData'
import { useSyncExternalStore } from 'react'

// simple storage subscription to refresh on localStorage updates via our stamp key
function subscribe(callback){
  const handler = () => callback()
  window.addEventListener('storage', handler)
  return () => window.removeEventListener('storage', handler)
}
function getSnapshot(){
  return localStorage.getItem('progress:stamp') || '0'
}

export default function CourseList(){
  // use stamp to re-render progress on checkbox toggle
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot)

  return (
    <div className="grid">
      {courses.map(course => {
        const completed = course.modules.filter(m => localStorage.getItem(`progress:${course.id}:${m.id}`) === '1').length
        const progress = (completed / course.modules.length) * 100
        return (
          <div key={course.id} className="card">
            <div className="card__head">
              <h3>{course.title}</h3>
              <span className="tag">{course.category}</span>
            </div>
            <p className="muted">{course.description}</p>
            <ProgressBar value={progress} />
            <ul className="modules">
              {course.modules.map(m => {
                const key = `progress:${course.id}:${m.id}`
                const done = localStorage.getItem(key) === '1'
                return (
                  <li key={m.id}>
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        defaultChecked={done}
                        onChange={e=>{
                          localStorage.setItem(key, e.target.checked ? '1' : '0')
                          localStorage.setItem('progress:stamp', String(Date.now()))
                        }}
                      />
                      <span>{m.title}</span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}