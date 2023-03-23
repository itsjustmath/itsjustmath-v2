import Image from "next/image";
import { handleize } from "../utils";

/**
 * Margin Figure
 *
 * @name MarginFigure
 * @description Add an image (with an optional caption) to the margin of a page
 * @param {string} id - Human-readable text (used for alt text, handleized into an ID)
 * @param {string} image - path to image
 * @param {number} height
 * @param {number} width
 * @param {JSX} [children] - for passing a caption into the component (accepts MD)
 * @example
 * <MarginFigure
 *    id='Arbitrary ID'
 *    image='path/to/image'
 *    height={300}
 *    width={300}
 * >
 *  Markdown formatted caption
 * </MarginFigure>
 */

export default function MarginFigure({
  id,
  image,
  height,
  width,
  noWrapper,
  className,
  children,
}) {
  const mfMarkup = (
    <>
      <label htmlFor={handleize(id)} className="margin-toggle">
        &#8853;
      </label>
      <input type="checkbox" id={handleize(id)} className="margin-toggle" />
      <span className={`marginnote ${className ? className : ""}`}>
        <Image
          className="fullwidth"
          src={image}
          alt={id}
          height={height}
          width={width}
        />
        <br />
        {children}
      </span>
    </>
  );
  return (
    <>
      {noWrapper ? (
        <>{mfMarkup}</>
      ) : (
        <div className="paragraph">{mfMarkup}</div>
      )}
    </>
  );
}
