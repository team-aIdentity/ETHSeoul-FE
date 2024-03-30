export default function Polygon(props) {
  return (
    <svg
      style={{
        height: `${props.size}`,
        width: `${props.size}`,
      }}
    >
      <polygon
        points={`0,0 ${props.size},${props.size / 2} 0,${props.size}`}
        fill="black"
      />
    </svg>
  );
}
