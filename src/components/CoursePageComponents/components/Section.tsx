import React from 'react'
import { Lecture } from './Lecture'
import Link from 'next/link'
export function CourseSection({ sections }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '0 auto',
        padding: '2rem'
      }}
    >
      <div style={{ width: '70%' }}>
        {sections.map(section => (
          <div key={section.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid lightgray' }}>
              <h2>{section.content}</h2>
              <p>{section.fullduration}</p>
            </div>
            {section.lectures.map(lecture => (
              <Link href={`/course/lecture/${lecture.id}`} key={lecture.id} style={{ width: '100%', textDecoration:"none", color:"#333" }}>
                <Lecture key={lecture.id} lecture={lecture} />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
