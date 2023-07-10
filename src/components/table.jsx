import { useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { cx } from 'class-variance-authority';
import { Spinner } from '@/components/ui/spinner';

function Table({ headers, values, isLoading, className }) {
    const [sortColumn, setSortColumn] = useState(headers[0].key);
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSort = key => {
        if (sortColumn === key) {
            // If we are already sorting by this column, reverse the sort order
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            // Otherwise, sort by this column in ascending order
            setSortColumn(key);
            setSortOrder('asc');
        }
    };
    const sortedValues = values?.slice().sort((a, b) => {
        if (sortOrder === 'asc') {
            // eslint-disable-next-line no-nested-ternary
            return a[sortColumn] < b[sortColumn]
                ? -1
                : a[sortColumn] > b[sortColumn]
                ? 1
                : 0;
        }
        if (sortOrder === 'desc') {
            // eslint-disable-next-line no-nested-ternary
            return a[sortColumn] < b[sortColumn]
                ? 1
                : a[sortColumn] > b[sortColumn]
                ? -1
                : 0;
        }

        return 0;
    });

    return (
        <div className={cx('overflow-x-auto bg-black-800 lg:p-2.5', className)}>
            <table className="table-auto w-full rounded-lg whitespace-nowrap">
                <thead>
                    <tr className="bg-transparent border-b-2 border-b-gray-50">
                        {headers.map(header => (
                            <th
                                key={header.key}
                                className="px-6 py-4 text-left font-semibold text-xs text-gray-700">
                                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                                <div
                                    className={cx(
                                        'flex items-center cursor-pointer select-none',
                                        {
                                            'justify-center': !header.left,
                                        }
                                    )}
                                    onClick={() => handleSort(header.key)}>
                                    <span className="mr-2">{header.title}</span>
                                    {sortColumn === header.key &&
                                        sortOrder === 'asc' && (
                                            <ChevronDownIcon className="w-4 h-4" />
                                        )}
                                    {sortColumn === header.key &&
                                        sortOrder === 'desc' && (
                                            <ChevronUpIcon className="w-4 h-4" />
                                        )}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-transparent">
                    {isLoading ? (
                        <tr>
                            <td colSpan={10}>
                                <Spinner
                                    color="white"
                                    width={40}
                                    height={40}
                                    className="mt-4 mb-2"
                                />
                            </td>
                        </tr>
                    ) : !sortedValues?.length ? (
                        <tr>
                            <td colSpan={10}>
                                <div className="flex items-center justify-center mt-4 mb-3 font-semibold text-base">
                                    No Data!
                                </div>
                            </td>
                        </tr>
                    ) : (
                        sortedValues?.map(row => (
                            <tr
                                key={row.id}
                                className="hover:bg-gray-200 border-b border-b-gray-50 last:border-0">
                                {headers.map(header =>
                                    header.key === 'action' ? (
                                        <td
                                            key={header.key}
                                            className={cx(
                                                'px-4 py-2 text-gray-700 font-semibold first:rounded-l-lg last:rounded-r-lg',
                                                {
                                                    'text-center': !header.left,
                                                }
                                            )}>
                                            {header.content(row.id)}
                                        </td>
                                    ) : (
                                        <td
                                            key={header.key}
                                            className={cx(
                                                'px-4 py-2 text-gray-700 font-semibold first:rounded-l-lg last:rounded-r-lg',
                                                {
                                                    'text-center': !header.left,
                                                }
                                            )}>
                                            {row[header.key]}
                                        </td>
                                    )
                                )}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
