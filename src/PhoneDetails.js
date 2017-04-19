import Component from 'inferno-component';
import Checkmark from "./Checkmark";

class PhoneDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneDetails: {},
            mainImageUrl: ''
        };
    }

    componentDidMount() {
        fetch('../Phones/' + this.props.params.phoneId + '.json')
            .then(response => response.json())
            .then(json => this.setState({
                phoneDetails: json,
                mainImageUrl: json.images[0]
            }));
    }

    render() {
        return (
            <div>
                <img src={'../' + this.state.mainImageUrl}
                     className='phone' alt={this.state.phoneDetails.name}/>
                <h1>{this.state.phoneDetails.name}</h1>

                <p>{this.state.phoneDetails.description}</p>

                <ul className='phone-thumbs'>
                    {this.state.phoneDetails.images &&
                    this.state.phoneDetails.images.map((image, i) =>
                        <li>
                            <img src={'../' + image }
                                 alt={image}
                                 onClick={() => this.setState({mainImageUrl: image})}
                            />
                        </li>
                    )}
                </ul>

                <ul className='specs'>
                    <li>
                        <span>Availability and Networks</span>
                        <dl>
                            <dt>Availability</dt>
                            {this.state.phoneDetails.availability &&
                            this.state.phoneDetails.availability.map((availability, i) => <dd>{availability}</dd>)}
                        </dl>
                    </li>
                    <li>
                        <span>Battery</span>
                        {this.state.phoneDetails.battery &&
                        <dl>
                            <dt>Type</dt>
                            <dd>{this.state.phoneDetails.battery.type}</dd>
                            <dt>Talk Time</dt>
                            <dd>{this.state.phoneDetails.battery.talkTime}</dd>
                            <dt>Standby time (max)</dt>
                            <dd>{this.state.phoneDetails.battery.standbyTime}</dd>
                        </dl>
                        }
                    </li>
                    <li>
                        <span>Storage and Memory</span>
                        {this.state.phoneDetails.storage &&
                        <dl>
                            <dt>RAM</dt>
                            <dd>{this.state.phoneDetails.storage.ram}</dd>
                            <dt>Internal Storage</dt>
                            <dd>{this.state.phoneDetails.storage.flash}</dd>
                        </dl>
                        }
                    </li>
                    <li>
                        <span>Connectivity</span>
                        {this.state.phoneDetails.connectivity &&
                        <dl>
                            <dt>Network Support</dt>
                            <dd>{this.state.phoneDetails.connectivity.cell}</dd>
                            <dt>WiFi</dt>
                            <dd>{this.state.phoneDetails.connectivity.wifi}</dd>
                            <dt>Bluetooth</dt>
                            <dd>{this.state.phoneDetails.connectivity.bluetooth}</dd>
                            <dt>Infrared</dt>
                            <dd>{Checkmark(this.state.phoneDetails.connectivity.infrared)}</dd>
                            <dt>GPS</dt>
                            <dd>{Checkmark(this.state.phoneDetails.connectivity.gps)}</dd>
                        </dl>
                        }
                    </li>
                    <li>
                        <span>Android</span>
                        {this.state.phoneDetails.android &&
                        <dl>
                            <dt>OS Version</dt>
                            <dd>{this.state.phoneDetails.android.os}</dd>
                            <dt>UI</dt>
                            <dd>{this.state.phoneDetails.android.ui}</dd>
                        </dl>
                        }
                    </li>

                    <li>
                        <span>Size and Weight</span>
                        {this.state.phoneDetails.sizeAndWeight &&
                        <dl>
                            <dt>Dimensions</dt>
                            {this.state.phoneDetails.sizeAndWeight.dimensions &&
                            this.state.phoneDetails.sizeAndWeight.dimensions.map((dim, i) =>
                                <dd>{dim}</dd>)}
                            <dt>Weight</dt>
                            <dd>{this.state.phoneDetails.sizeAndWeight.weight}</dd>
                        </dl>
                        }
                    </li>
                    <li>
                        <span>Display</span>
                        {this.state.phoneDetails.display &&
                        <dl>
                            <dt>Screen size</dt>
                            <dd>{this.state.phoneDetails.display.screenSize}</dd>
                            <dt>Screen resolution</dt>
                            <dd>{this.state.phoneDetails.display.screenResolution}</dd>
                            <dt>Touch screen</dt>
                            <dd>{Checkmark(this.state.phoneDetails.display.touchScreen)}</dd>
                        </dl>
                        }
                    </li>
                    <li>
                        <span>Hardware</span>
                        {this.state.phoneDetails.hardware &&
                        <dl>
                            <dt>CPU</dt>
                            <dd>{this.state.phoneDetails.hardware.cpu}</dd>
                            <dt>USB</dt>
                            <dd>{this.state.phoneDetails.hardware.usb}</dd>
                            <dt>Audio / headphoneDetails jack</dt>
                            <dd>{this.state.phoneDetails.hardware.audioJack}</dd>
                            <dt>FM Radio</dt>
                            <dd>{Checkmark(this.state.phoneDetails.hardware.fmRadio)}</dd>
                            <dt>Accelerometer</dt>
                            <dd>{Checkmark(this.state.phoneDetails.hardware.accelerometer)}</dd>
                        </dl>
                        }
                    </li>
                    <li>
                        <span>Camera</span>
                        {this.state.phoneDetails.camera &&
                        <dl>
                            <dt>Primary</dt>
                            <dd>{this.state.phoneDetails.camera.primary}</dd>
                            <dt>Features</dt>
                            <dd>{this.state.phoneDetails.camera.features.join(', ')}</dd>
                        </dl>
                        }
                    </li>
                    <li>
                        <span>Additional Features</span>
                        <dd>{this.state.phoneDetails.additionalFeatures}</dd>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PhoneDetails;