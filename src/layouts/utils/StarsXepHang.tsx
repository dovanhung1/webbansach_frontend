const StarsXepHang = (rating: number) => {
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.5;
    const empty = 5 - full - (hasHalf ? 1 : 0);
    return (
      <div className="d-flex align-items-center gap-1 text-warning">
        {Array.from({ length: full }).map((_, i) => (
          <i key={`f-${i}`} className="bi bi-star-fill" />
        ))}
        {hasHalf && <i className="bi bi-star-half" />}
        {Array.from({ length: empty }).map((_, i) => (
          <i key={`e-${i}`} className="bi bi-star" />
        ))}
      </div>
    );
  };
  export default StarsXepHang;