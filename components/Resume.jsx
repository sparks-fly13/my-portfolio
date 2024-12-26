import React from 'react'

export const ResumeText = () => {
  return (
    <div>
        <object data='https://pulkit-resume.s3.ap-south-1.amazonaws.com/resume_text.pdf' type='application/pdf' className='h-screen w-screen' />
    </div>
  )
}

export const ResumePhoto = () => {
    return (
        <div>
            <object data='https://pulkit-resume.s3.ap-south-1.amazonaws.com/resume_photo.pdf' type='application/pdf' className='h-screen w-screen' />
        </div>
    )
}