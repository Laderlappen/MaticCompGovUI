import React, {Component} from 'react';

import Proposal from './Proposal';

class Proposals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proposals: []
    }
  }

  componentDidMount = () => {
    this.getProposals()
  }
  
  xhr = (api, callback) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${api}`, true);
    xhr.send();

    xhr.onreadystatechange = (e) => {
      if(xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr.responseText);
      }
    }
  }

  getProposals = async () => {
    if(this.props.openCheck === true) {
      // TODO: Query mainnet api
      this.xhr("https://api.compound.finance/api/v2/governance/proposals?network=ropsten", (res) => {
        const data = JSON.parse(res);
        if(this.state.proposals !== data.proposals) {
          this.setState({proposals: data.proposals});
        }
        console.log(this.state.proposals);
      });
    }
  }

  render() {
    let proposals = [];

    this.state.proposals.forEach(proposal => {
      proposals.push(
        <Proposal
          title={proposal.title}
          description={proposal.description} 
          key={proposals.id}
        />
      );
    });

    return (
      <section className="proposals">
        {proposals}
      </section>
    );
  }
}

export default Proposals;