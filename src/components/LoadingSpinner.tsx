import '../styles/LoadingSpinner.css'

export default function LoadingSpinner(): JSX.Element {
  return (
    <>
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </>
  )
}