import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'redux-form';
import { CITIES, T_SHIRT_SIZES } from '../../reference-data';

class NamesForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="1" className="row">
                <FormGroup className="col-md-6">
                    <Label>First Name (as it appears on your passport)</Label>
                    <Field name="firstName" placeholder="First Name" component={ReduxFormInput} type="text" />
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label>Last Name (as it appears on your passport)</Label>
                    <Field name="lastName" placeholder="Last Name" component={ReduxFormInput} type="text" />
                </FormGroup>
            </div>,
            <div key="2" className="row">
                <FormGroup className="col-md-6">
                    <Label>First Name (in Russian)</Label>
                    <Field name="firstNameNative" placeholder="First Name" component={ReduxFormInput} type="text" />
                </FormGroup>
                <FormGroup className="col-md-6">
                    <Label>Last Name (in Russian)</Label>
                    <Field name="lastNameNative" placeholder="Last Name" component={ReduxFormInput} type="text" />
                </FormGroup>
            </div>,
            <div key="3" className="row">
                <FormGroup className="col-md-12">
                    <Label>City</Label>
                    <Field name="city" type="select" component={ReduxFormInput}>
                        <option value="">(Empty)</option>
                        {CITIES.map(city => <option key={city.id}>{city.name}</option>)}
                    </Field>
                </FormGroup>
            </div>,
            <div key="4" className="row">
                <FormGroup className="col-md-12">
                    <Label>Birth Date</Label>
                    <Field name="birth-date" type="date" component={ReduxFormInput} />
                </FormGroup>
            </div>,
            <div key="5" className="row">
                <FormGroup className="col-md-12">
                    <Label>Gender</Label>
                    <div className="col-md-12">
                        <div className="form-check form-check-inline">
                            <Field
                                className="form-check-input"
                                id="inlineRadio8"
                                type="radio"
                                name="gender"
                                value="male"
                                component={ReduxFormInput}
                            />
                            <Label className="form-check-label" for="inlineRadio8">
                                Male
                            </Label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field
                                className="form-check-input"
                                id="inlineRadio8"
                                type="radio"
                                name="gender"
                                value="female"
                                component={ReduxFormInput}
                            />
                            <Label className="form-check-label" for="inlineRadio8">
                                Female
                            </Label>
                        </div>
                    </div>
                </FormGroup>
            </div>,
            <div key="6" className="row">
                <FormGroup className="col-md-12">
                    <Label className="field-required">T-Shirt Size</Label>
                    <div className="form-group col">
                        {T_SHIRT_SIZES.map(size => (
                            <div key={size.id} className="form-check form-check-inline">
                                <Field
                                    className="form-check-input"
                                    id="inlineRadio8"
                                    type="radio"
                                    name="size"
                                    value={size.name}
                                    component={ReduxFormInput}
                                />
                                <Label className="form-check-label" for="inlineRadio8">
                                    {size.name}
                                </Label>
                            </div>
                        ))}
                    </div>
                </FormGroup>
            </div>,
        ];
    }
}

export default NamesForm;
