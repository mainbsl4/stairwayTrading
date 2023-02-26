export default function SpacedSpan({ className, children }) {
    return (
        <span className={className}>
            {' '}{children}{' '}
        </span>
    );
};