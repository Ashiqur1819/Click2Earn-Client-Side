const PrimaryButton = ({ label }) => {
  return (
    <div>
      <button className="bg-yellow-400 px-4 py-2 rounded-sm text-black font-medium transition-all hover:bg-amber-400">
        {label}
      </button>
    </div>
  );
};

export default PrimaryButton;
