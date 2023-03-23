import { useRef, useEffect, useState } from 'react';

export default function Image(props) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      //   key={props.photo}
      // className="p-xl-5 p-sm-2 my-2"
      ref={ref}
      className={
        isVisible ? 'ease-in-image p-xl-5 p-sm-2 my-2' : 'p-xl-5 p-sm-2 my-2'
      }
    >
      <img
        src={'/images/' + props.photo}
        alt={props.photo}
        className="img-fluid_ w-100"
      />
    </div>
  );
}
