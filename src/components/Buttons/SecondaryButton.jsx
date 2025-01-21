const SecondaryButton = ({ label }) => {
  return (
    <div>
      <button className="bg-bg-tertiary px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e60060]">
        {label}
      </button>
    </div>
  );
};

export default SecondaryButton;
