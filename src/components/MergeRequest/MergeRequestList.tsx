import React, { Component } from 'react';
import MergeRequestItem from './MergeRequestItem';
import { MergeRequestType } from '../../types/MergeRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

interface Props {
    mergeRequests: MergeRequestType[];
}

class MergeRequestList extends Component<Props> {
  public static defaultProps = {
    mergeRequests: []
  };

  public tabs = [
    'Title', 
    'Author', 
    <FontAwesomeIcon icon={faThumbsUp} size="sm" className="text-green-dark"/>, 
    <FontAwesomeIcon icon={faThumbsDown} size="sm" className="text-red-dark"/>
  ];

  public render() {
    let { mergeRequests } = this.props;

    const listItems = mergeRequests.map((mergeRequest: MergeRequestType) =>
      <MergeRequestItem key={mergeRequest.id} mergeRequest={mergeRequest} />
    );

    return (
      <div className="ml-4">
        <table className="w-full">
          <thead className="text-2xl mb-5">
            <tr>
              { this.tabs.map((tab, index) => <th key={index} className="py-4" align="left">{tab}</th>)}
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
      </div>
    );
  }
}

export default MergeRequestList;
