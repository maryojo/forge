import React from 'react';

const InputField = ({ placeholder, value, onChange, label, name, error, type='text' }) => {
  return (
    <div className="flex flex-col w-full gap-1">
      {label && <label htmlFor={name} className='text-[14px] font-[500]'>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={name}
        className={`border-[1px] border-[#CBD5E1] rounded-[6px] py-2 px-2 text-[15px] ${error ? 'input-error' : ''}`}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default InputField;
