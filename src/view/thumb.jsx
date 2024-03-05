
export function Thumb({ image_url }) {
  return (
    <div className="thumb-box">
      <img className="thumb" src={image_url} alt="profile visual" />
    </div>
  );
}