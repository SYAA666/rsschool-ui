import ReduxFormInput from 'components/ReduxFormInput';
import * as React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { Field } from 'redux-form';
import { NUMBER } from '../../reference-data';

class MentoringForm extends React.PureComponent<any, any> {
    render() {
        return [
            <div key="1" className="row">
                <FormGroup className="col-md-12">
                    <Label>What stages would you like to be as a mentor?</Label>
                    <div className="row">
                        <FormGroup className="col-md-6">
                            <div className="form-check form-check-inline">
                                <Input
                                    className="form-check-input"
                                    type="radio"
                                    name="tShirtSize"
                                    id="inlineRadio101"
                                    value="option101"
                                />
                                <Label className="form-check-label" for="inlineRadio101">
                                    Only second (&approx; 15 weeks)
                                </Label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Input
                                    className="form-check-input"
                                    type="radio"
                                    name="tShirtSize"
                                    id="inlineRadio101"
                                    value="option102"
                                />
                                <Label className="form-check-label" for="inlineRadio102">
                                    Second & Third (&approx; 22 weeks)
                                </Label>
                            </div>
                        </FormGroup>
                    </div>
                </FormGroup>
            </div>,
            <div key="2" className="row">
                <FormGroup className="col-md-6">
                    <Label className="field-required">How many students do you want to mentor?</Label>
                    <Field className="form-control" name="number" type="select" component={ReduxFormInput}>
                        <option value="">(Empty)</option>
                        {NUMBER.map(num => <option key={num.id}>{num.number}</option>)}
                    </Field>
                </FormGroup>
            </div>,
            <div key="3" className="row">
                <FormGroup className="col-md-12">
                    <Label>
                        If you want to mentor students with another colleague together, write his/her name and surname?
                    </Label>
                    <Field type="text" name="friend" component={ReduxFormInput} placeholder="Ivan Ivanov" />
                </FormGroup>
            </div>,
        ];
    }
}

export default MentoringForm;
