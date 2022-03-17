const QuoteDisplay = (props) => {
  return (
    <>
        <div className="advice-text">
          <p className="advice-id">ADVICE #{props.advice.slip.id}</p>
          <q className="quote">{props.advice.slip.advice}</q>
        </div>
    </>
  )
}

export default QuoteDisplay;