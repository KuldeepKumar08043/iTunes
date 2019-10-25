import React from 'react';
import './Search.css';
import List from '../list/List';
import { connect } from 'react-redux';
import { onFormSubmit } from '../../actions/actions';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iTune: [],
            searchName: '',
        };        
    }

    componentWillReceiveProps(nextITunesProps) {
        if (nextITunesProps.iTune) {
            this.setState({
                iTune: nextITunesProps.iTune,
            });
        }
    }

    render() {
        return (
            <div className="">
                <div className="col-11 search-container">
                    {/* <form> */}
                        <div className="col-12 text-right p-0">
                            <div className="form-group col-sm-3 d-i-block">
                                <input type="text" name="search" className="form-control"
                                    onChange={event => this.setState({ searchName: event.target.value })}
                                    placeholder="Search" />
                            </div>
                            <div className="col-1 d-i-block v-align">
                                <button type="button" className="btn btn-success" value="search"
                                    onClick={() => { this.props.onFormSubmit(this.state.searchName) }}>Search</button>
                            </div>
                        </div>
                    {/* </form> */}
                    <table id="dtBasicExample" className="table table-striped table-bordered table-sm" width="100%">
                        <thead>
                            <tr>
                                <th className="th-sm">Artist Id</th>
                                <th className="th-sm">Artist Name</th>
                                <th className="th-sm">Censored Name</th>
                                <th className="th-sm">Country</th>
                                <th className="th-sm">Currency</th>
                                <th className="th-sm">Details</th>
                                <th className="th-sm">Album</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.iTune.map((data, index) => {
                                    return <List key={index} info={data}></List>
                                })
                            }
                        </tbody>
                    </table>
                    {
                        this.state.iTune.length <= 0 ? <p className="text-danger">No record available</p> : ""
                    }

                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        iTune: state.respData
    }
}

export default connect(mapStateToProps, { onFormSubmit })(Search);