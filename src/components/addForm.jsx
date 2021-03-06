import React, { PureComponent } from 'react';

class AddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = e => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        // this.inputRef.current.value = '';
        this.formRef.current.reset();
    }
    render() {
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef} 
                    type="text" 
                    className="add-input" 
                    placeholder="입력하세요" 
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default AddForm;