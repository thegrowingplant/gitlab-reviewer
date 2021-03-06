import MergeRequestItem from 'components/MergeRequest/MergeRequestItem';
import React, { Component } from 'react';
import { MergeRequest } from 'types/FormattedTypes';

interface Props {
  mergeRequests: MergeRequest[];
}

class MergeRequestList extends Component<Props> {
  public static defaultProps: Props = {
    mergeRequests: [],
  };

  public render() {
    const { mergeRequests } = this.props;

    const listItems = mergeRequests.map((mergeRequest: MergeRequest) => (
      <MergeRequestItem key={mergeRequest.id} mergeRequest={mergeRequest} />
    ));

    return (
      <div className="pl-3 border-gray-200 border-t-2 bg-gray-100">
        <table className="w-full">
          <tbody>{listItems}</tbody>
        </table>
      </div>
    );
  }
}

export default MergeRequestList;
