const PrimaryButton = ({ label }) => {
  return (
    <div>
      <button className="bg-[#FF136F] px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e6025b]">
        {label}
      </button>
    </div>
  );
};

export default PrimaryButton;
