'use client'

export default function PageHeader({ children }) {
  return (
    <div className="bg-gray-700">
      <div className="container py-20">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="text-6xl font-bold inline-block border-y border-yellow-400 py-3 text-white">
              {children}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
