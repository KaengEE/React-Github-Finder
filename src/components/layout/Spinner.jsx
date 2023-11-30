import spinner from "../../assets/spinner.gif";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        className="text-center mx-auto"
        width={180}
        alt="로딩..."
      />
    </div>
  );
}

export default Spinner;
