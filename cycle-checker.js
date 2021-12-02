var cycleChecker = function(node) {
  if (!node) {
    return false
  }
  var nodeTracker = {}
  while (node.next !== null) {
    if (!nodeTracker[node.next]) {
      nodeTracker[node.next] = 1
    } else {
      return true
    }
    node = node.next
  }
  return false
}
