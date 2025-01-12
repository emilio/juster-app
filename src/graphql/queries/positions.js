import gql from "graphql-tag"

export const getAllUserPositions = gql`
    query getAllUserPositions($address: String) {
        position(where: { userId: { _eq: $address } }, order_by: { id: desc }) {
            id
            value
            withdrawn
            event {
                id
                status
                betsCloseTime
                currencyPair {
                    symbol
                }
                bets {
                    id
                    side
                    reward
                    amount
                    createdTime
                    userId
                }
                deposits {
                    amountAboveEq
                    amountBelow
                    eventId
                    id
                    userId
                    createdTime
                    shares
                }
                winnerBets
                poolAboveEq
                poolBelow
                totalBetsAmount
                totalLiquidityProvided
                totalLiquidityShares
                totalValueLocked
                liquidityPercent
                measurePeriod
                closedOracleTime
                createdTime
                targetDynamics
            }
        }
    }
`

export const getUserPositionsForWithdrawal = gql`
    query getUserPositionsForWithdrawal($address: String) {
        position(
            where: {
                userId: { _eq: $address }
                withdrawn: { _eq: false }
                event: { status: { _eq: "FINISHED" } }
            }
            order_by: { id: desc }
        ) {
            id
            value
            withdrawn
            rewardAboveEq
            rewardBelow
            event {
                id
                status
                betsCloseTime
                currencyPair {
                    symbol
                }
                bets {
                    id
                    side
                    reward
                    amount
                    createdTime
                    userId
                }
                deposits {
                    amountAboveEq
                    amountBelow
                    eventId
                    id
                    userId
                    createdTime
                    shares
                }
                winnerBets
                poolAboveEq
                poolBelow
                totalBetsAmount
                totalLiquidityProvided
                totalLiquidityShares
                totalValueLocked
                liquidityPercent
                measurePeriod
                closedOracleTime
                createdTime
                targetDynamics
            }
        }
    }
`
