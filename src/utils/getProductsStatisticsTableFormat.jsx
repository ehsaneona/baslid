import { Badge } from '@/components/ui/badge';
import { cx } from 'class-variance-authority';

export const getProductsStatisticsTableFormat = arr =>
    arr.map((obj, index) => ({
        id: index,
        name: (
            <div className="flex items-center">
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                    src={obj.image}
                    alt="product image"
                    className="mr-2.5 w-12 h-12 rounded-lg object-cover"
                />
                <span className="max-w-[200px] truncate">{obj.name}</span>
            </div>
        ),
        date: new Date(obj.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        }),
        tendered: `$${obj.tendered.toFixed(2)}`,
        earnings: `$${obj.earning.toFixed(2)}`,
        status: (
            <Badge variant="default" className="w-[105px]">
                <span
                    className={cx('h-2 w-2 rounded-full mr-2 bg-black-900')}
                />
                Paid
            </Badge>
        ),
    }));
