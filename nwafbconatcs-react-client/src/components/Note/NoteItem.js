import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class NoteItem extends Component {
    render() {
        return (
            <div>
                <div className="card text-left col-12 bg-light shadow mb-4 bg-white rounded">
                    <div className="card-header mt-2 shadow">
                        <div className="row justify-content-between">
                            <h5 className="mt-1 ml-2">Note Subject</h5>
                            <h5 className="mt-1 mr-2">Modified: 1/1/2019 Creation Date: 1/1/1970</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-1"><strong>Note:</strong></p>
                                <p>Now this is the story all about how My life got flipped, turned upside down And I'd like to take a minute just sit right there I'll tell you how I became the prince of a town called Bel-air
                                    In west Philadelphia born and raised In the playground where I spent most of my days Chilling out, maxing, relaxing all cool And all shooting some b-ball outside the school When a couple of guys, they were up to no good Started making trouble in my neighborhood I got in one little fight and my mom got scared She said "You're moving with your aunti and uncle in Bel-air"
                                    I whistled for a cab and when it came near the License plate said "fresh" and had dice in the mirror If anything I could say that this cab was rare But I thought nah, forget it, yo homes to Bel-air!
                                    I pulled up to a house about seven or eight And I yelled to the cabby "Yo, homes smell you later!" Looked at my kingdom I was finally there To sit on my throne as the prince of Bel-air</p>
                            </div>
                            <div className="btn-group mr-1 mb-1 mt-3" role="group">
                                <button type="button"
                                        className="btn btn-secondary"><FontAwesomeIcon icon="edit" /></button>
                                <button type="button"
                                        className="btn btn-color-red"><FontAwesomeIcon icon="trash" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteItem;