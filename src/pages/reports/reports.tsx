import clsx from 'clsx';
import React, { useCallback } from 'react';
import ReactFlow, {
	addEdge,
	Background,
	Connection,
	Edge,
	Node,
	useEdgesState,
	useNodesState,
} from 'reactflow';

import { CustomNode } from './fragments';

import 'reactflow/dist/style.css';
const initialNodes: Array<Node> = [
	{
		id: '1',
		type: 'input',
		data: { label: 'Node 1' },
		position: { x: 250, y: 5 },
	},
	{ id: '2', data: { label: 'Node 2' }, position: { x: 100, y: 100 } },
	{ id: '3', data: { label: 'Node 3' }, position: { x: 400, y: 100 } },
	{
		id: '4',
		type: 'custom',
		data: { label: 'Custom Node' },
		position: { x: 400, y: 200 },
	},
];

const initialEdges: Array<Edge> = [
	{ id: 'e1-2', source: '1', target: '2', animated: true },
	{ id: 'e1-3', source: '1', target: '3' },
];

const nodeTypes = {
	custom: CustomNode,
};

const Reports = (): React.ReactElement => {
	const [nodes, , onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const onConnect = useCallback(
		(params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
		[setEdges]
	);

	return (
		<div className={clsx('w-full h-full bg-inherit p-4')}>
			<div className={clsx('flex flex-row')}>
				<div className={clsx('w-4/5')}>
					<div className={'flex flex-row justify-end pb-[16px]'}>
						<button
							className={clsx(
								'font-medium px-4 py-2 border border-gray-900 border-radius rounded'
							)}
						>
							{'Open Note Editor'}
						</button>
					</div>
					<div className={clsx('h-[533px] bg-white')}>
						<ReactFlow
							nodes={nodes}
							edges={edges}
							onNodesChange={onNodesChange}
							onEdgesChange={onEdgesChange}
							onConnect={onConnect}
							nodeTypes={nodeTypes}
							fitView
						>
							<Background />
						</ReactFlow>
					</div>
				</div>
				<div className={clsx('w-1/5 pl-[20px]')}>{'Side Panel'}</div>
			</div>
		</div>
	);
};

export default Reports;
