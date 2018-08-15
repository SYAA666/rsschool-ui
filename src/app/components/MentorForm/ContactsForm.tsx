import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, InputGroup, InputGroupAddon, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { emailFormatter, emailParser } from './parsers-formatters';

class ContactsForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="0" className="row">
                <FormGroup className="col-md-6">
                    <Label className="field-required">Phone (in the form 8-XXX-XXX-XX-XX)</Label>
                    <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">8-</InputGroupAddon>
                        <Field
                            name="phone"
                            pattern="(\+?\d[- .]*){9,13}"
                            placeholder="111-111-11-11"
                            component={ReduxFormInput}
                            type="tel"
                        />
                    </InputGroup>
                </FormGroup>
            </div>,
            <div key="1" className="row">
                <FormGroup className="col-md-12">
                    <Label>Email</Label>
                    <Field
                        component={ReduxFormInput}
                        format={emailFormatter}
                        name="emails"
                        parse={emailParser}
                        placeholder="Email"
                        type="email"
                        id="inputEmail4"
                    />
                </FormGroup>
            </div>,
            <div key="2" className="row">
                <FormGroup className="col-md-12">
                    <Label for="inputEmail5">Your nickname at Skype</Label>
                    <Field
                        type="text"
                        name="skype"
                        component={ReduxFormInput}
                        id="inputEmail5"
                        placeholder="ivan.ivanov"
                    />
                </FormGroup>
            </div>,
            <div key="3" className="row">
                <FormGroup className="col-md-12">
                    <Label for="inputEmail5">Your nickname at Telegram</Label>
                    <Field
                        type="text"
                        name="skype"
                        id="inputEmail5"
                        component={ReduxFormInput}
                        placeholder="Messenger Name: @nickname"
                    />
                </FormGroup>
            </div>,
            <div key="4" className="row">
                <FormGroup className="col-md-12">
                    <Label for="input53">Other contat</Label>
                    <Field
                        type="text"
                        component={ReduxFormInput}
                        name="other"
                        id="input53"
                        placeholder="Messenger Name: @nickname"
                    />
                </FormGroup>
            </div>,
        ];
    }
}

export default ContactsForm;
