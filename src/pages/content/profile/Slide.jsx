export default function Slide(props) {
  return (
    <div id="slide">
      <div className="inline-button">
        <button>
          <i className="bx bx-chevron-left" />
        </button>
      </div>
      <ul>{props.children}</ul>
      <div className="inline-button">
        <button>
          <i className="bx bx-chevron-right" />
        </button>
      </div>
    </div>
  );
}
