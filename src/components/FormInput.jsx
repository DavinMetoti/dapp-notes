import React from 'react';

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            limit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.limit),
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addDatas(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div className="title-container">
                    <h2 className="title">Tambah Catatan</h2>
                </div>
                <div className="card">
                    <form action="#" onSubmit={this.onSubmitEventHandler}>
                        <div className="form-row">
                            <div className="input-data">
                                <input
                                    type="text"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onTitleChangeEventHandler}
                                    required
                                />
                                <div className="underline"></div>
                                <label htmlFor="title">Title</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-data textarea">
                                <textarea
                                    name="body"
                                    value={this.state.body}
                                    onChange={this.onBodyChangeEventHandler}
                                    rows="8"
                                    cols="80"
                                    required
                                ></textarea>
                                <br />
                                <div className="underline"></div>
                                <label htmlFor="body">Write your message</label>
                            </div>
                        </div>
                        <div className="button-container">
                            <button type="submit" className="button">TAMBAH</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormInput;
