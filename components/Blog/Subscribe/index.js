// @flow

import React, { Component } from 'react';
import yup from 'yup';
import Form, { Field, Summary } from 'react-formal';
import types from 'react-formal-inputs';

import Button from 'components/Button';
import Input from 'components/Input';

import EmailIcon from './email.png';
import './styles.scss';

Form.addInputTypes(types);

const schema = yup.object({
  subscriptions: yup
    .array()
    .min(1, 'At least one subscription should be selected'),
  email: yup
    .string()
    .email()
    .required(),
});

class BlogSubscribe extends Component<{}, Object> {
  constructor() {
    super();
    this.state = {
      model: {
        subscriptions: [],
        email: '',
      },
      errors: {},
    };
  }
  render() {
    return (
      <Form
        className="blogSubscribe"
        schema={schema}
        value={this.state.model}
        onChange={model => this.setState({ model })}
      >
        <div className="blogSubscribe__title">Subscribe Our News</div>
        <div className="blogSubscribe__body">
          <div className="text-center mb-md">
            <img alt="Envelope icon" src={EmailIcon} />
          </div>
          <h6 className="blogSubscribe__desc">
            Choose the information that&apos;s right for you and have it
            delivered to your inbox.
          </h6>
          <div className="blogSubscribe__checkboxes">
            <div className="blogSubscribe__checkboxes">
              <Field
                name="subscriptions"
                type="selectlist"
                data={[
                  {
                    value: 'patientNewsletter',
                    text: 'Monthly Patient Newsletter',
                  },
                  {
                    value: 'industryNews',
                    text: 'Weekly Industry News',
                  },
                  {
                    value: 'eventUpdates',
                    text: 'Event Updates',
                  },
                ]}
                textField="text"
                valueField="value"
                multiple
              />
            </div>
          </div>
          <Input
            className="blogSubscribe__input"
            element={Field}
            name="email"
            id="email"
            placeholder="Your email"
          />
          <Summary />
          <Button element={Form.Button} className="dark bold small expanded">
            Subscribe
          </Button>
        </div>
      </Form>
    );
  }
}

export default BlogSubscribe;
