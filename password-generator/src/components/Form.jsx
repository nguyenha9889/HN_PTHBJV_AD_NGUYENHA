import PropTypes from 'prop-types';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form({ checked, result, pwLength, handleCheckBox, handlePwLength, handleGeneratePw }) {

    return (
        <div className='form-container'>
            <h2>Password Generator</h2>
            <form>
                <div className='form-input'>
                    <input
                        type="text"
                        name="result"
                        id="result"
                        value={result}
                        readOnly
                    />
                    <button className='btn'>
                        <i className="fa-regular fa-copy"></i>
                    </button>
                </div>
                <div className="form-group">
                    <label htmlFor="pw-length" className="form-label">
                        Password length
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id='pw-length'
                        name='pwLength'
                        max={26}
                        min={8}
                        value={pwLength}
                        onChange={handlePwLength}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="uppercase" className="form-label">
                        Include Uppercase Letters
                    </label>
                    <input
                        type="checkbox"
                        className="form-control"
                        id='uppercase'
                        name='uppercase'
                        checked={checked.uppercase}
                        onChange={handleCheckBox}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lowercase" className="form-label">
                        Include Lowercase Letters
                    </label>
                    <input
                        type="checkbox"
                        className="form-control"
                        id='lowercase'
                        name='lowercase'
                        checked={checked.lowercase}
                        onChange={handleCheckBox}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="include-number" className="form-label">
                        Include Numbers
                    </label>
                    <input
                        type="checkbox"
                        className="form-control"
                        id='include-number'
                        name='numbers'
                        checked={checked.numbers}
                        onChange={handleCheckBox}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="include-symbol" className="form-label">
                        Include symbols
                    </label>
                    <input
                        type="checkbox"
                        className="form-control"
                        id='include-symbol'
                        name='symbols'
                        checked={checked.symbols}
                        onChange={handleCheckBox}
                    />
                </div>
                <div className="form-btn">
                    <button type="button"
                        onClick={handleGeneratePw}
                    >
                        Generate New Password
                    </button>
                </div>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

Form.propTypes = {
    result: PropTypes.string,
    checked: PropTypes.object,
    handleCheckBox: PropTypes.func,
    handlePwLength: PropTypes.func,
    handleGeneratePw: PropTypes.func,
}

export default Form;