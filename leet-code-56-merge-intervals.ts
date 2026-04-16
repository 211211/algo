class IntervalNode {
    start: number
    end: number
    left: IntervalNode | null
    right: IntervalNode | null

    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
        this.left = null;
        this.right = null;
    }
}

function insert(root: IntervalNode | null, start, end): IntervalNode {
    const newNode = new IntervalNode(start, end);

    if (!root) {
        return newNode;
    }

    let current: IntervalNode = root

    while (true) {
        if (start < current.start) {
            if (current.left === null) {
                current.left = newNode;
                break;
            }
            current = current.left
        } else {
            // start >= current.start -> sang phải
            if (current.right === null) {
                current.right = newNode
                break;
            }
            current = current.right
        }
    }

    return root
}

function merge(intervals: number[][]): number[][] {
    // build BST tree (interative)
    let root: IntervalNode | null = null;
    for (const [start, end] of intervals) {
        root = insert(root, start, end);
    }

    // duyệt in-order (trái - gốc - phải)
    const result: number[][] = []    
    const stack: IntervalNode[] = [];
    let current: IntervalNode | null = root;

    while (stack.length > 0 || current !== null) {
        // đến trái cùng (most left)
        while (current !== null) {
            stack.push(current);
            current = current.left
        }

        // lấy node nhỏ nhất (mới nhất) từ stack
        current = stack.pop();

        if (result.length === 0) {
            result.push([current.start, current.end])
        } else {
            const lastMerged = result[result.length - 1]
            const [lastMergedStart, lastMergedEnd] = lastMerged

            if (current.start > lastMergedEnd) {
                result.push([current.start, current.end])
            } else {
                lastMerged[1] = Math.max(current.end, lastMergedEnd);
            }
        }

        current = current.right;
    }

    return result
};





// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// function merge(intervals) {
//     // Bước 1: Sắp xếp theo điểm bắt đầu
//     intervals.sort((a, b) => a[0] - b[0]);

//     const result = [];

//     for (const currentInterval of intervals) {
//         const [currentStart, currentEnd] = currentInterval;

//         // Nếu result rỗng HOẶC khoảng mới bắt đầu SAU khi khoảng cuối kết thúc → không chồng → thêm mới
//         if (result.length === 0) {
//             result.push(currentInterval);
//             continue;
//         }

//         const lastMerged = result[result.length - 1];
//         const [lastMergedStart, lastMergedEnd] = lastMerged;

//         if (currentStart > lastMergedEnd) {
//             // KHÔNG chồng — khoảng mới nằm hoàn toàn bên phải
//             result.push(currentInterval);
//         } else {
//             // CÓ chồng — khoảng mới bắt đầu TRƯỚC hoặc ĐÚNG lúc khoảng cuối kết thúc
//             // Mở rộng end của khoảng cuối ra cho bao trùm khoảng mới
//             const furthestEnd = Math.max(lastMergedEnd, currentEnd);
//             lastMerged[1] = furthestEnd;   // sửa trực tiếp phần tử cuối trong result
//         }
//     }

//     return result;
// }