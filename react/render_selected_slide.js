import React, {useEffect, useMemo, useState} from 'react';

const DEFAULT_SLIDE = 0

function Slides({slides}: {title: string; text: string}[]) {
  // assume slides are not null
	const [selectedSlide, setSelectedSlide] = useState(DEFAULT_SLIDE)
  
  const onRestartClicked = () => {
    setSelectedSlide(DEFAULT_SLIDE)
  }
  
  const onPrevClicked = () => {
    let prevSlideIndex = selectedSlide - 1 < 0 ? 0 : selectedSlide - 1
    setSelectedSlide(prevSlideIndex)
  }
  
  const onNextClicked = () => {
    let nextSlideIndex = selectedSlide + 1 > slides.length - 1 ? slides.length - 1 : selectedSlide + 1
    setSelectedSlide(nextSlideIndex)
  }
  
  const renderSelectedSlideComp = useMemo(() => {
    const renderedSlide = slides[selectedSlide]
    return (
      <>
        <h1 data-testid="title">{renderedSlide?.title}</h1>
        <p data-testid="text">{renderedSlide?.text}</p>
      </>
    )
  }, [selectedSlide, slides])
  
  useEffect(() => {
    setSelectedSlide(DEFAULT_SLIDE)
  }, [])
  
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={onRestartClicked}>Restart</button>
        <button data-testid="button-prev" className="small" onClick={onPrevClicked}>Prev</button>
        <button data-testid="button-next" className="small" onClick={onNextClicked}>Next</button>
      </div>
      <div id="slide" className="card text-center">
        {renderSelectedSlideComp}	
      </div>
    </div>
  );
}

export default Slides;
