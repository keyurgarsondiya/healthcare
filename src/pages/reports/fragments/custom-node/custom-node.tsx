import React, { memo } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';

export const CustomNode = ({
	data,
	isConnectable,
	targetPosition = Position.Top,
	sourcePosition = Position.Bottom,
}: NodeProps): React.ReactElement => {
	return (
		<>
			<Handle
				type="target"
				position={targetPosition}
				isConnectable={isConnectable}
			/>
			{data?.label}
			<Handle
				type="source"
				position={sourcePosition}
				isConnectable={isConnectable}
			/>
		</>
	);
};

CustomNode.displayName = 'CustomNode';

export default memo(CustomNode);
