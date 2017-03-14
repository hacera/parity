// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component } from 'react';

import { api } from '../parity';
import DappsStore from '../dappsStore';

import styles from './warning.css';

export default class Warning extends Component {
  dappsStore = DappsStore.get();

  state = {
    show: true
  };

  render () {
    if (!this.state.show) {
      return null;
    }

    return (
      <div className={ styles.warning } onClick={ this.onClose }>
        <div>
          WARNING: Registering a dapp is for developers only. Please ensure you understand the
          steps needed to develop and deploy applications, should you wish to use this dapp for
          anything apart from queries.
        </div>
        <div>
          A non-refundable fee
          of { api.util.fromWei(this.dappsStore.fee).toFormat(3) } <small>ETH</small> is required
          for any registration.
        </div>
      </div>
    );
  }

  onClose = () => {
    this.setState({ show: false });
  }
}
